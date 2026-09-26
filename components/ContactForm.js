'use client';

import { useState } from 'react';

const EMAIL = 'zqx0310liubo@gmail.com';

export default function ContactForm(){
  const [values,setValues]=useState({name:'',email:'',brand:'',category:'',brief:''});

  function update(e){
    setValues(v=>({...v,[e.target.name]:e.target.value}));
  }

  function submit(e){
    e.preventDefault();
    const subject = encodeURIComponent('AI Drama Ad Inquiry — ' + (values.brand || values.name || 'New Brand'));
    const body = encodeURIComponent(
      'Name: ' + values.name + '\n' +
      'Email: ' + values.email + '\n' +
      'Brand / product URL: ' + values.brand + '\n' +
      'Category: ' + values.category + '\n\n' +
      'Product / campaign brief:\n' + values.brief + '\n\n' +
      'Sent from AI Drama Ads by Moon Ocean Studio.'
    );
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
  }

  return <form onSubmit={submit}>
    <input name="name" value={values.name} onChange={update} placeholder="Your name" required/>
    <input name="email" value={values.email} onChange={update} type="email" placeholder="Work email" required/>
    <input name="brand" value={values.brand} onChange={update} placeholder="Brand / product URL"/>
    <select name="category" value={values.category} onChange={update}>
      <option value="">Product category</option>
      <option>Jewelry</option>
      <option>Watches</option>
      <option>Fashion</option>
      <option>Beauty</option>
      <option>Ecommerce</option>
      <option>Other</option>
    </select>
    <textarea name="brief" value={values.brief} onChange={update} placeholder="What product do you want to feature, and who is the audience?"/>
    <button className="btn primary" type="submit">Send My Product</button>
    <p style={{margin:'4px 0 0',fontSize:13,color:'var(--muted)'}}>
      This opens your email app with the brief pre-filled. You can also email us directly at <a href="mailto:zqx0310liubo@gmail.com">zqx0310liubo@gmail.com</a>.
    </p>
  </form>
}
