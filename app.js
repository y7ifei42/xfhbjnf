        function checkFortune() {
            var weather = document.getElementById('weather-select').value;
            var season = parseInt(document.getElementById('season-input').value, 10);
            var result = "味噌ラーメン"; // デフォルトの値

            if (colour === "曇り" && season === 春) {
                result = "醤油ラーメン";
            } else if (colour === "曇り" && season === 冬) {
                result = "味噌ラーメン";
            } else if (colour === "晴れ" && season === 冬) {
                result = "豚骨ラーメン";
            } else if (colour === "雨" && season === 秋) {
                result = "塩ラーメン";
            } else if (colour === "快晴" && season === 夏) {
                result = "担々麺";
            } else if (colour === "雨" && season === 夏) {
                result = "つけ麺";
            } 

            document.getElementById('result-output').innerText = "あなたの今夜のラーメンは【" + result + "】です";
        }
