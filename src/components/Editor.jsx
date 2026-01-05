import { forwardRef, useRef, useImperativeHandle } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = forwardRef(({ value, onChange }, ref) => {
  const quillRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getQuill: () => quillRef.current?.getEditor(),
  }));

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];
  <ReactQuill
    ref={quillRef}
    theme="snow"
    value={value}
    onChange={onChange}
    modules={modules}
    formats={formats} // ✅ เพิ่มตรงนี้
    style={{ height: "300px", marginBottom: "2rem" }}
  />;

  const toolbarOptions = ["bold", "italic", "underline", "strike"];
  const modules = { toolbar: toolbarOptions };

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      // formats={formats}
      style={{ height: "300px", marginBottom: "2rem" }}
    />
  );
});

export default Editor;
