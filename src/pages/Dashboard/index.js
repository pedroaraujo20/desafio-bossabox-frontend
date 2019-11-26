import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../services/api';

import { Container, Header, Content, Button, Tools } from './styles';
import Modal from '../../components/Modal';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  link: Yup.string().required('Link is required!'),
  description: Yup.string().required('Description is required!'),
  tags: Yup.string(),
});

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadTools() {
      try {
        const response = await api.get('/tools');
        setTools(response.data);
      } catch (err) {
        toast.error(err);
      }
    }
    loadTools();
  }, []);

  async function handleSubmit(data) {
    try {
      await api.post('/tools', data);
      toast.success('New tool registered!');
      const response = await api.get('/tools');
      setTools(response.data);
      setModal(false);
    } catch (err) {
      toast.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/tools/${id}`);

      const newToolList = tools.filter(tool => tool._id !== id);

      toast.success('Tool deleted!');

      setTools(newToolList);
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <Container>
      <Content>
        <h1>VUUTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <Header>
          <div>
            <input type="text" placeholder="search" />
            <input type="checkbox" id="tags" />
            <label htmlFor="tags">search for tags only</label>
          </div>
          <Button onClick={() => setModal(true)} type="button" color="#7159c1">
            <div>
              <MdAdd size={20} color="#FFF" />
            </div>

            <span>Add</span>
          </Button>
        </Header>

        <Tools>
          <ul>
            {tools.map(tool => (
              <li key={tool._id}>
                <div>
                  <a href={tool.link}>{tool.title}</a>
                  <button type="button" onClick={() => handleDelete(tool._id)}>
                    remove
                  </button>
                </div>
                <p>{tool.description}</p>
                <span>{tool.tags}</span>
              </li>
            ))}
          </ul>
        </Tools>
      </Content>
      {modal && (
        <Modal>
          <div>
            <MdAdd size={20} color="#000" />
            <h1>Add new tool</h1>
          </div>
          <Form id="tool-form" schema={schema} onSubmit={handleSubmit}>
            <label htmlFor="title">Tool Name</label>
            <Input name="title" id="title" />

            <label htmlFor="link">Tool Link</label>
            <Input name="link" id="link" />

            <label htmlFor="description">Tool Description</label>
            <Input name="description" id="description" />

            <label htmlFor="tags">Tags</label>
            <Input name="tags" id="tags" />
          </Form>

          <Button
            form="tool-form"
            type="submit"
            color="#7159c1"
            style={{ float: 'right' }}
          >
            <div>
              <MdAdd size={20} color="#FFF" />
            </div>

            <span>Add</span>
          </Button>
        </Modal>
      )}
    </Container>
  );
}
