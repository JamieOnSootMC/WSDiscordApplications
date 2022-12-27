import React from 'react';

export const DisplayFormikState = (props: any) =>
    <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'Adamina' }} />
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '.65rem',
                padding: '.5rem',
            }}
        >
      <strong>props</strong> ={' '}
            {JSON.stringify(props, null, 2)}
    </pre>
    </div>;

export const MoreResources = () =>
    <div>
        <hr style={{ margin: '3rem 0' }} />
        <h3></h3>
        <ul>

        </ul>
    </div>;