//要素取得
const playlistList = document.getElementById("playlist-list");
const playlistDetail = document.getElementById("playlist-detail");
const playlistDetailCloseBtn = document.getElementById("playlist-detail-close-btn");

//プレーヤー
function openFullPlayer() {
  const fullPlayer = document.getElementById("full-player");
  const miniPlayer = document.getElementById("mini-player");

  fullPlayer.classList.remove("hidden");
  fullPlayer.classList.add("active");

  // ミニプレーヤーは隠す
  miniPlayer.classList.add("hidden");
}

function closeFullPlayer() {
  const fullPlayer = document.getElementById("full-player");
  const miniPlayer = document.getElementById("mini-player");

  fullPlayer.classList.remove("active");
  fullPlayer.classList.add("hidden");

  // ミニプレーヤーを表示
  miniPlayer.classList.remove("hidden");
}

//プレイリスト詳細
function openPlaylist() {
  const playlistDetail = document.getElementById("playlist-detail");

  playlistDetail.classList.remove("hidden");
  playlistDetail.classList.add("active");
}

function closePlaylist() {
  const playlistDetail = document.getElementById("playlist-detail");

  playlistDetail.classList.remove("active");
  playlistDetail.classList.add("hidden");
}

//プレイリストページ
playlistList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (li && playlistList.contains(li)) {
    openPlaylist();
  }
});

playlistDetailCloseBtn.addEventListener('click', () => {
  closePlaylist();
  playlistDetail.classList.add("no-animation");
});

// タブ切り替えシステム
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      // タブ切り替え
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // コンテンツ切り替え
      contents.forEach(content => {
        content.classList.toggle("active", content.id === targetId);
      });
    });
  });
});
