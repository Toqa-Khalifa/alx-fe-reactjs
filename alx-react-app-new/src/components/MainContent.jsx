import React from 'react';

function MainContent({ children }) {
  return (
    <main
      style={{
        padding: '24px',
        maxWidth: '1000px',
        margin: '20px auto',
        backgroundColor: '#ffffff',
        minHeight: '240px',
        textAlign: 'left',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        {children && React.Children.count(children) > 0 ? (
          children
        ) : (
          <div
            style={{
              width: '100%',
              padding: '18px',
              border: '1px dashed #ddd',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#666'
            }}
          >
            <p style={{ margin: 0 }}>
              No content to display — add <code>UserProfile</code> components here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default MainContent;
