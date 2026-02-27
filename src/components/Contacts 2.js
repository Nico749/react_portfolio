import React,{useEffect} from 'react';
import { Columns } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
import { Button } from 'react-bulma-components';
import '../styles/Contacts.css'
import '../styles/PortfolioContainer.css'
import Pdf from '../Demo_photos/Resume_Pasqualini.pdf';

// removed phone numbe, linkedin profile and github links as well email adress 
export default function Contacts() {
  //loads the page at the top 
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (

    <div class="hero is-fullheight  ">
      
      <Columns class="is-vcentered">

        <h1 id="tit" className='lineUp'>CONTACTS</h1>
        <Columns.Column offset={3} size={6} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="mailto:"  onClick={()=>window.dataLayer.push({
                    event: 'link_click',
                    eventProps: {
                        link_category: "contacts",
                        link_action: " mail link click",
                        link_label: "mail",
                        link_page: window.location.href.split('#').pop()                    
                    }
                  })}>Mail</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={3} size={6} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="" onClick={()=>window.dataLayer.push({
                    event: 'link_click',
                    eventProps: {
                        link_category: "contacts",                        
                        link_action: " phone link click",
                        link_label: "phone",
                        link_page: window.location.href.split('#').pop(),
                        
                    
                    }
                  })}>Phone</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={3} size={6} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href=" " target="_blank" rel="noopener noreferrer" onClick={()=>window.dataLayer.push({
                    event: 'link_click',
                    eventProps: {
                        link_category: "contacts",                        
                        link_action: " github link click",
                        link_label: "github",
                        link_page: window.location.href.split('#').pop(),
                        
                    
                    }
                  })}>GitHub Profile</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={3} size={6} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="" target="_blank" rel="noopener noreferrer"  onClick={()=>window.dataLayer.push({
                    event: 'link_click',
                    eventProps: {
                        link_category: "contacts",
                        link_action: " linkedin link click",
                        link_label: "linkedin",
                        link_page: window.location.href.split('#').pop()                    
                    }
                  })}>LinkedIn</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={3} size={6} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href={Pdf}  target="_blank" rel="noopener noreferrer"  onClick={()=>window.dataLayer.push({
                    event: 'link_click',
                    eventProps: {
                        link_category: "contacts",
                        link_action: "resume link click",
                        link_label: "resume",
                        link_page: window.location.href.split('#').pop()                    
                    }
                  })}>Resume</a></h1>
            </div>
          </div>
        </Columns.Column>
       


        {/* <Columns.Column offset={2} size={8} >

          <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Mail</Form.Label>
            <Form.Control>
              <Form.Input />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Message</Form.Label>
            <Form.Control>
              <Form.Textarea />
            </Form.Control>
          </Form.Field>

          <Form.Field kind="group">
            <Form.Control>
              <Button color="link">Submit</Button>
            </Form.Control>
            <Form.Control>
              <Button color="link" colorVariant="light">
                Cancel
              </Button>
            </Form.Control>
          </Form.Field>

        </Columns.Column> */}

      </Columns>
    </div>
  );
}
