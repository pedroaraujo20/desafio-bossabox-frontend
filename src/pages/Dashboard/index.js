import React, { useState, useEffect, useRef } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdClose } from 'react-icons/md';
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
  const [search, setSearch] = useState('');
  const [selectedTool, setSelectedTool] = useState();
  const [filteredTool, setFilteredTool] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);

  /* useEffect(() => {
    async function handleSearch() {
      if (search !== '') {
        const response = await api.get(`tools?tag=${search}`);
        setFilteredTool(response.data);
        console.log(search, filteredTool);
      }
    }
    handleSearch();
  }, [search]);//eslint-disable-line */

  useEffect(() => {
    async function loadTools() {
      try {
        const response = await api.get('/tools');

        const data = response.data.map(tool => ({
          ...tool,
          hashTag: tool.tags.map(tag => `#${tag} `),
        }));

        setTools(data);
      } catch (err) {
        toast.error(err);
      }
    }
    loadTools();
  }, []);

  async function handleSubmit({ title, link, description, tags }) {
    try {
      await api.post('/tools', {
        title,
        link,
        description,
        tags: tags.split(','),
      });
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

      setModalRemove(false);

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
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <input type="checkbox" id="tags" checked disabled />
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
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTool(tool._id);
                      setModalRemove(true);
                    }}
                  >
                    remove
                  </button>
                </div>
                <p>{tool.description}</p>
                <span>{tool.hashTag}</span>
              </li>
            ))}
          </ul>
        </Tools>
      </Content>
      {modal && (
        <Modal>
          <div>
            <div>
              <MdAdd size={20} color="#000" />
              <h1>Add new tool</h1>
            </div>
            <MdClose
              style={{ cursor: 'pointer' }}
              size={30}
              color="#000"
              onClick={() => setModal(false)}
            />
          </div>
          <Form id="tool-form" schema={schema} onSubmit={handleSubmit}>
            <label htmlFor="title">Tool Name</label>
            <Input name="title" id="title" />

            <label htmlFor="link">Tool Link</label>
            <Input name="link" id="link" />

            <label htmlFor="description">Tool Description</label>
            <Input name="description" id="description" />

            <label htmlFor="tags">Tags (separated by comma)</label>
            <Input
              name="tags"
              id="tags"
              placeholder="node,react,react native"
            />
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
      {modalRemove && (
        <Modal>
          <h1>Remove tool</h1>
          <p>Are you sure you want to remove it?</p>
          <div
            style={{
              marginTop: 30,
              justifyContent: 'flex-end',
              marginBottom: 0,
            }}
          >
            <Button
              style={{ justifyContent: 'center' }}
              onClick={() => setModalRemove(false)}
              type="button"
              color="#7159c1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              style={{ justifyContent: 'center', marginLeft: 15 }}
              onClick={() => handleDelete(selectedTool)}
              type="button"
              color="#7159c1"
            >
              <span>Yes</span>
            </Button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
