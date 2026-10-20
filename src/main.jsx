import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.jsx';
import './index.css';

const theme = {
  token: {
    colorPrimary: '#1f4fd8',
    colorText: '#172033',
    colorBgLayout: '#f4f6f9',
    borderRadius: 6,
    fontFamily: "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: 15,
  },
  components: {
    Table: {
      headerBg: '#172033',
      headerColor: '#ffffff',
      headerSplitColor: 'rgba(255, 255, 255, 0.16)',
      borderColor: '#e2e7ef',
      rowHoverBg: '#eef2fb',
    },
    Menu: { horizontalItemSelectedColor: '#1f4fd8' },
  },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
