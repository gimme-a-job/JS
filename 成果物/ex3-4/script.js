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
                const max = Math.max(...values);
                const min = Math.min(...values);

                // output.innerHTML = output.innerHTML + "最大値は" + max + "です。" + "<br>";
                output.insertAdjacentHTML("beforeend", ("最大値は" + max + "です。" + "<br>") );
                // output.innerHTML = output.innerHTML + "最小値は" + min + "です。" + "<br>";
                output.insertAdjacentHTML("beforeend", ("最小値は" + min + "です。" + "<br>") )

                initialize();
            }
        }

        function initialize() {
            // 初期化
            count = 0;
            values = [];
        }