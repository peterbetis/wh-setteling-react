import React from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Content from './Content';

const Header = (props) => {
    props = {
      url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida risus dictum purus vehicula, in feugiat massa mollis. Aliquam dui lacus, tempor at tristique et, consequat at velit. Duis malesuada sit amet justo ut pulvinar. Pellentesque lobortis, nulla a auctor gravida, massa leo eleifend urna, at pellentesque eros tellus laoreet nibh. Etiam pulvinar tortor sit amet mauris lacinia porttitor. Etiam non efficitur ante. Proin sed aliquet turpis. Vivamus aliquet eu massa et ultrices.'
    }
    return (
      <div>
        <header className="App-header">
          <menu>
            <img src={props.url} alt="React" /><strong>{props.title}</strong>
            <Menu className="menu" />
            <Menu className="menu" />
          </menu>
        </header>
        <Sidebar />
        <Content content={props.content} />
      </div>
      )
  }

export default Header;
