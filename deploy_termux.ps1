Write-Host "========== DEPLOY BACKEND TO TERMUX (MULTI-DEVICE) =========="
$Port = 8080
$ArchiveName = "backend.tar.gz"

Write-Host "==========================="
Write-Host "1. Nen source code server"
Write-Host "==========================="
# Quay vao thu muc server de nen dung cau truc
Set-Location "e:\chatbot ai\server"
tar.exe -czvf "..\$ArchiveName" --exclude="node_modules" --exclude="dalat_chatbot.db" --exclude=".git" --exclude=".vscode" .

Write-Host "==========================="
Write-Host "2. Duc lo USB cho tat ca thiet bi"
Write-Host "==========================="
Set-Location "e:\chatbot ai"
$devices = (adb devices | Select-Object -Skip 1 | Where-Object { $_ -match "^([^\s]+)\s+device" } | ForEach-Object { $matches[1] })

if ($devices.Count -eq 0) {
    Write-Warning "KHONG TIM THAY THIET BI NAO! Hay kiem tra cap USB va USB Debugging."
} else {
    foreach($d in $devices) {
        Write-Host "Dang thong cong $Port cho thiet bi: $d..."
        adb -s $d reverse tcp:$Port tcp:$Port
    }
}

Write-Host "==========================="
Write-Host "3. Mo Server truyen file"
Write-Host "==========================="
Write-Host "--------------------------------------------------------"
Write-Host " TREN TERMUX (DIEN THOAI), HAY CHAY LENH SAU:"
Write-Host " curl -s http://127.0.0.1:$Port/termux_payload.sh | bash"
Write-Host "--------------------------------------------------------"
Write-Host "Server dang chay... DUNG TAT CUA SO NAY KHI CHUA XONG!"
npx --yes http-server . -p $Port -c-1 --cors
