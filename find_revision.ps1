$userProfile = $env:USERPROFILE
$path = "$userProfile\.gemini\antigravity\brain\9a5ea0ae-69b8-4096-b482-022065df8720\.system_generated\logs\transcript_full.jsonl"
if (!(Test-Path $path)) {
    $path = "$userProfile\.gemini\antigravity\brain\9a5ea0ae-69b8-4096-b482-022065df8720\.system_generated\logs\transcript.jsonl"
}
$outputPath = "$userProfile\Desktop\gokweb-ek_d-zenleme_ve_test\gokweb-ek_d-zenleme_ve_test\second_rev_extracted.txt"

if (!(Test-Path $path)) {
    Write-Host "Transcript file not found: $path"
    exit 1
}

$fileLines = Get-Content -Path $path
# Let's search for the second revision which contains bg-gradient-to-r from-[#FF007F] and bg-white/40 backdrop-blur-md
foreach ($line in $fileLines) {
    if ($line.Contains("replace_file_content") -and $line.Contains("bg-white/40 backdrop-blur-md border border-white/40")) {
        if ($line.Contains("find_revision") -or $line.Contains("update_hero")) {
            continue
        }
        $obj = ConvertFrom-Json $line
        if ($obj.tool_calls) {
            foreach ($tc in $obj.tool_calls) {
                if ($tc.name -eq "replace_file_content") {
                    $content = $tc.args.ReplacementContent
                    if ($content) {
                        [System.IO.File]::WriteAllText($outputPath, $content, [System.Text.Encoding]::UTF8)
                        Write-Host "Successfully extracted second revision and saved to $outputPath"
                        exit 0
                    }
                }
            }
        }
    }
}

Write-Host "Could not find second revision in transcript."
