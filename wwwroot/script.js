// "OnExportStarted" イベントが発生したときに実行されるスクリプトを登録します
igRegisterScript("OnExportStarted", (e) => {
    // イベントの詳細からグリッドオブジェクトを取得します
    const grid = e.target.grid;
    // グリッドの列リストから "Image" フィールドを持つ列を見つけます
    const ageColumn = grid.columnList.find(c => c.field === "Image")
    // "Image" 列を非表示に設定します
    ageColumn.hidden = true;
}, false);

// "OnExportEnded" イベントが発生したときに実行されるスクリプトを登録します
igRegisterScript("OnExportEnded", (e) => {
    // イベントのターゲットからグリッドオブジェクトを取得します
    const grid = e.target.grid;
    // グリッドの列リストから "Image" フィールドを持つ列を見つけます
    const ageColumn = grid.columnList.find(c => c.field === "Image")
    // "Image" 列の非表示設定を解除します。
    ageColumn.hidden = false;
}, false);
