import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as AntdIcons from '../src/icons';
import './index.less'

const allIcons: {
  [key: string]: any;
} = AntdIcons;

const AllIconDemo = () => {
  const visibleIconList = React.useMemo(() => Object.keys(allIcons), []);

  return (
    <div style={{ color: '#555' }}>
      <h1 style={{ textAlign: 'center' }}>All Icons</h1>
      <div className='Container'>
        {
          visibleIconList.map(iconName => {
            const Component = allIcons[iconName];
            return (
              <div key={iconName} className='card'>
                <Component style={{ fontSize: '24px', color: '#06aea6' }} />
                <p className='description'>{iconName}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

ReactDOM.render(<AllIconDemo />, document.getElementById('root'))


