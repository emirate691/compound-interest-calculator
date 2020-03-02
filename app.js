new Vue ({
    el:"#app",
    data : {
       
        principal: "",
        
        rate : "",
       
        compounding: "",
       
        time: "",

        amount: null    
    },
   
   
    computed : {
        calculate : function() {
            this.amount = ( this.principal * Math.pow(1 + ((this.rate / 100) / this.compounding), this.compounding *this.time));
            
            return this.amount.toFixed(2);
        }
    }
   

});