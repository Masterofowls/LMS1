// src/components/CodeEditor.js
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import styles from '../styles/CodeEditor.module.css';

const CodeEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
    });

    return () => {
      editor.dispose();
    };
  }, []);

  return <div ref={editorRef} className={styles.editorContainer} />;
};

export default CodeEditor;
