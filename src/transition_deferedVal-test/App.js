import data from './data';
import {useState, useMemo, useDeferredValue, useTransition} from 'react';

function App() {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState(data);
  // const defferedValue = useDeferredValue(text);
  const [isPending, startTransition] = useTransition();

  const filteredPosts = useMemo(() => {
    // return posts.filter(item => item.name.toLowerCase().includes(defferedValue));
    return posts.filter(item => item.name.toLowerCase().includes(text));
  }, [text]);

  // const onValueChange = (e) => {
  //   setText(e.target.value);
  // }

  const onValueChange = (e) => {
    startTransition(() => {
      setText(e.target.value);
    })
  }

  return (
    <form className="w-50 border mt-5 mb-10 p-3 m-auto">
      <input value={text} type='text' onChange={onValueChange}/>

      <hr/>

      {/* <div>
        {filteredPosts.map(post => (
          <div key={post._id}>
            <h4>{post.name}</h4>
          </div>
        ))}
      </div> */}

      <div>
        {isPending ? <h3>Loading ...</h3> : 
          filteredPosts.map(post => (
            <div key={post._id}>
              <h4>{post.name}</h4>
            </div>
          ))
        }

      </div>
    </form>
  );
}

function NewFeaturesHook() {
  return (
    <App/>
  );
}

export default NewFeaturesHook;
