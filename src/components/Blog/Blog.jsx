import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h4>Q:When should you use context API?</h4>
            <p>A:Context is typically utilized when multiple components at various nesting levels require access to the same data. It should be used with discretion because it makes component reuse more difficult. Component composition is typically a simpler approach than context if you simply want to avoid providing some props over several layers.</p>
            <h4>Q:What is a custom hook?</h4>
            <p>A:A custom hook is a JavaScript function that begins with 'use' and can be used to invoke other hooks. Let's look at some of the key distinctions between a custom React JS hook and React JS components: A custom hook does not require a signature.</p>
            <h4>Q:What is useRef?</h4>
            <p>A:The built-in React hook useRef(initialValue) receives one argument as the initial value and returns a reference (aka ref). A reference is an object with the unique property current.</p>
            <h4>Q:What is useMemo?</h4>
            <p>A:UseMemo Hook can be used to prevent costly, resource-intensive processes from running indefinitely. In this example, we have a costly function that executes on every render. When you change the count or add a todo, you will notice a delay in execution.
</p>
        </div>
    );
};

export default Blog;