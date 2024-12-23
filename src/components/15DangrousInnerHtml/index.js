// <!-- DangerouslySetInnerHtml is used to inject HTML
// directly into components, but it  should be used 
// with caution to avoid cross-site scripting(Xss) vulnerability.   -->

// In React, dangerouslySetInnerHTML is a special attribute that allows you to set raw HTML directly inside a component's DOM element. 
// It is commonly used when you need to insert HTML content that comes from a trusted source, such as a rich text editor,
// or when you need to embed HTML that React doesn't automatically handle.



{/* <div dangerouslySetInnerHTML={{ __html: '<h1>Hello World</h1>' }} /> */}




const MyComponent = () => {
  const htmlContent = "<p>This is a <strong>dangerous</strong> HTML string.</p>";

  return (
    <div>
      <h2>Example with dangerouslySetInnerHTML</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default MyComponent;
