'use strict';

        const output = document.getElementById('output');

        let count = 0; // 現在何回目かを格納
        const count_max = 2; // 何回目までやるかを格納

        let values = []; // 入力値が格納されておるはず

        callDialogue();

        function callDialogue() {
            // p076より
            const input = window.prompt("数字を入力してね。")

            if (count === 0) // 初期化処理の１つ、現在意味をなしておらんので無くてもOK
            {
            // output.innerHTML = ""; // こっちより ↓ のが良いらしい
            output.textContent = ""; // "https://qiita.com/amamamaou/items/624c22adec32515e863b"より
            }

            count++;

            values.push(input);

            output.insertAdjacentHTML("beforeend", ("入力された値" + count + " ： " + values[count-1] + "<br>") )

            if (isNaN(input)) {

                // "https://qiita.com/tomokichi_ruby/items/3640f0bc64ad6c676206"より 
                output.insertAdjacentHTML("beforeend", (count + "つ目は数字ではありませんでした。" + "<br>") ) // "https://qiita.com/amamamaou/items/624c22adec32515e863b"より

                output.insertAdjacentHTML("beforeend", ("数字を入力してください" + "<br>") );

            }

            if(count < count_max) {callDialogue(); return;}

            getResult();

        }

        function getResult() {
            if (count >= count_max) {
                
                let least;

                /* Math.minを使う場合 */
                // least = Math.min(...values); // だが問題では使うなとか言っておる

                /* 仕方ないからif文を使ってやる場合 */
                const index1 = 0;
                const index2 = 1;

                const val1 = values[index1];
                const val2 = values[index2];

                if(val1 > val2) least=val2;
                else if(val1 < val2) least=val1;
                else if(val1 === val2) {output.insertAdjacentHTML("beforeend", ("どちらも" + val2 + "です、解散!(^^)!" + "<br>") ); initialize(); return;}

                output.insertAdjacentHTML("beforeend", ("小さい方の値は" + least + "です。" + "<br>") );

                initialize();

            }
        }

        function initialize() {
            // 初期化
            count = 0;
            values = [];
        }