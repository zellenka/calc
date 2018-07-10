let app = new Vue ({
    el: '#app',
    data: {
        messagePrice: 'Запоните пустые поля',
        messageWeight: 'Вес в грпммах, например 500',
        count: 1,
        EMS: 10,
        koef: '4.3'
    },
    watch: {
        
    },
    methods: {
        Price: function () {
            let itemPrice = Number(document.getElementById("itemPrice").value);
            let emc = Number(document.getElementById("EMC").value);
            let amount = Number(document.getElementById("amount").value);
            let koef = Number(document.getElementById("koef").value);
            let f = ((amount * itemPrice + emc) * 0.1 + (amount * itemPrice + emc))*koef;
            let x = (f * 0.02 + f) + ((f * 0.02 + f) * 0.22);
            this.messagePrice = x.toFixed(2) + ' UAH';
          },
        Weight: function() {
            let itemweight = Number(document.getElementById("itemweight").value);
            let Wresult = itemweight * 0.01 * 37.8;
            this.messageWeight = Wresult.toFixed(2) + ' UAH';
        }
        
    }
})





