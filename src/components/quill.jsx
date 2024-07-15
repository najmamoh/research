import { useQuill } from 'react-quilljs';
import { useEffect } from 'react';
import 'quill/dist/quill.snow.css';
export default () => {
    const { quill, quillRef } = useQuill();
    useEffect(() => {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
      }
    }, [quill]);
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
    );
  };