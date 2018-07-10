let app = new Vue ({
    el: '#app',
    data: {
        message: 'Запоните пустые поля'
        
    },
    watch: {
        
    },
    methods: {
        result: function () {
            let itemPrice = Number(document.getElementById("itemPrice").value);
            let emc = Number(document.getElementById("EMC").value);
            let amount = Number(document.getElementById("amount").value);
            let koef = Number(document.getElementById("koef").value);
            var f = ((amount * itemPrice + emc) * 0.1 + (amount * itemPrice + emc))*koef;
            var x = (f * 0.02 + f) + ((f * 0.02 + f) * 0.22);
            this.message = x.toFixed(2) + ' UAH';
          }
    }
})


// oninput = function() {
//     (function() {
//         var a = Number(document.getElementById("itemPrice").value);
//         var b = Number(document.getElementById("EMC").value);
//         var c = Number(document.getElementById("amount").value);
//         var d = Number(document.getElementById("koef").value);
//         var v = (c * a + b) * 0.1 + c * a + b;
//         var f = v * d
//         var x = (f * 0.02 + f) + ((f * 0.02 + f) * 0.22)
//         if (x >= 0 && v <= 10000) {
//             document.getElementById("result").innerHTML = x.toFixed(2);
//         }
//     }()),
//     (function() {
//         var W = Number(document.getElementById("itemweight").value);
//         var Wresult = W * 0.01 * 37.8;
//         if (Wresult >= 0 && Wresult <= 10000) {
//             document.getElementById("resultWeight").innerHTML = Wresult.toFixed(2);
//         }
//     }())
// }


