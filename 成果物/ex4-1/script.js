'use strict';

        const output = document.getElementById('output');

        let count = 0; // 現在何回目かを格納
        const count_max = 3; // 何回目までやるかを格納

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

            output.insertAdjacentHTML("beforeend", (count + "つ目 ： " + values[count-1] + "<br>") )

            if (isNaN(input)) {
                // "https://qiita.com/tomokichi_ruby/items/3640f0bc64ad6c676206"より 
                // output.innerHTML = output.innerHTML + count + "つ目は数字ではありませんでした。" + "<br>"; //こっちは使わない方が良いらしい、壊れるとかなんとか
                output.insertAdjacentHTML("beforeend", (count + "つ目は数字ではありませんでした。" + "<br>") ) // "https://qiita.com/amamamaou/items/624c22adec32515e863b"より
                // output.innerHTML = output.innerHTML + "数字を入力してください" + "<br>";
                output.insertAdjacentHTML("beforeend", ("数字を入力してください" + "<br>") );

            }

            // if(count < count_max) callDialogue();
            if(count < count_max) {callDialogue(); return;} // ex4-2で気づいた

            getResult();

        }

        function getResult() {
            if (count >= count_max) {
                
                let str = "";
                
                // 処理がださいのでほんとはもっとなんとかしたいの巻
                // if(values[0] === values[1] === values[2]) // Javascriptもこの書き方は許容せんらｃ
                if(values[0] === values[1] && values[1] === values[2])
                {
                    str += "3つの値は等しいです";
                }
                else if (values[0] === values[1] || values[1] === values[2] || values[2] === values[0])
                {
                    str += "2つの値は等しいです";
                }
                else
                {
                    str += "どれも等しくないね(;´･ω･)";
                }

                output.insertAdjacentHTML("beforeend", (str + "<br>") );

                initialize();
            }
        }

        function initialize() {
            // 初期化
            count = 0;
            values = [];
        }