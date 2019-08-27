import React from 'react';

class Subscribe extends React.Component 
{
    onSubmit = async (e) => 
    {    
        e.preventDefault();
        const email = (this.emailInput && this.emailInput.value) || null;

        if(this.emailInput && !email) {return;}

      try{  
          await subscribeToNewsletter({email})

          if(this.emailInput )
          { 
              this.emailInput.value=''; 
          }
        }
        catch{

        }
    }

    render()
    {
        return(
            <form onSubmit={this.onSubmit}>
                <h2>Signup for our Email Newsletter to be Updated on our Development</h2>
                <TextField inputRef={(elm) => {  this.emailInput = elm;}} type='email' value='enter email here'/>
                <Button variant="raised" type='submit'>Signup</Button>
            </form>
        );
    }
}

export default Subscribe;