import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import api from '../../services/api';

import { Container, Header, Content, Button, Tools } from './styles';

export default function Dashboard() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('/tools');
      setTools(response.data);
    }
    loadTools();
  }, []);
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
          <Button type="button" color="#EE4D64">
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
                  <button type="button">remove</button>
                </div>
                <p>{tool.description}</p>
                <span>{tool.tags}</span>
              </li>
            ))}
          </ul>
        </Tools>
      </Content>
    </Container>
  );
}
