$userProfile = $env:USERPROFILE
$projDir = "$userProfile\Desktop\gokweb-ek_d-zenleme_ve_test\gokweb-ek_d-zenleme_ve_test"

$files = @(
    "components\HeroSection.tsx",
    "app\page.tsx",
    "app\globals.css"
)

foreach ($f in $files) {
    $src = Join-Path $projDir $f
    $dst = "$src.bak"
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Backed up $src to $dst"
    } else {
        Write-Host "File not found: $src"
    }
}
