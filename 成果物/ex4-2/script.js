'use strict';

        const output = document.getElementById('output');

        let count = 0; // 現在何回目かを格納
        const count_max = 1; // 何回目までやるかを格納

        let values = []; // 入力値が格納されておるはず、まぁ今回1個しか入らんけど

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

            // if(count < count_max) callDialogue(); // この問題では再起的な呼び出しは行わないので無くてもOKなはず⇒自分で自分を呼ぶのはバグの元かも
            if(count < count_max) {callDialogue(); return;} // これが答えだ！！

            getResult(); // functionの中ではなく外に判定分を書かないとバグる？⇒ことはなかった
            // if (count >= count_max) getResult(); // バグ避け、if文が被ってはおるが⇒と思ったが意味なし

        }

        function getResult() {
            if (count >= count_max) {
                
                /* 入力回数が何回かあっても対応できるように */
                // let total = 0; //これだと型が文字列か何かになってしまう
                let total = Number(0); // こっちは変えても意味が無い様子 // "https://www.javadrive.jp/javascript/ini/index10.html"より

                // for(let item of values) total+=item; //これだと型が文字列か何かになってしまう
                for(let item of values) total+=Number(item); // "https://www.javadrive.jp/javascript/ini/index10.html"より

                // output.insertAdjacentHTML("beforeend", (count + "<br>") ); // 検証用
                // output.insertAdjacentHTML("beforeend", (total + "<br>") ); // 検証用

                // "https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration"より
                for(let i=0; i<total ; i++)
                {
                    let str="";

                    if(i%2 === 0) str="+";
                    else if(i%2 === 1) str="-";

                    console.log(str);
                }

                initialize(); // これが無いとやっぱ動かンゴねぇ、でも理由がわからないンゴねぇ⇒上でreturn文を追加して解決！

            }
        }

        function initialize() {
            // 初期化
            count = 0;
            values = [];
        }