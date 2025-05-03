import React from 'react';

const Layout = ({ children, title }) => {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;
