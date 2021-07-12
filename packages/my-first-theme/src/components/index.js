import React from "react";
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Post from "./Post"
import Switch from "@frontity/components/switch"
import List from "./list"

const Root = ({state}) => {
    const data = state.source.get(state.router.link); 
    return (
      <>
        <h1>Hello Frontity</h1>
        <p>Current URL: {state.router.link}</p>
        <nav>
            <Link link="/">Home</Link>
            <br />
            <Link link="/about-us">About-Us</Link>
            <br />
        </nav>
        <hr /> 
        <main>
            <Switch>
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Post when={data.isPage} />
                
            </Switch>
        </main>
      </>
    );
  };
  
  export default connect(Root)