Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Pushti Sinojiya\.gemini\antigravity\scratch\the-coffee-space-react\public\images\brand_logo.png"
$dstPath = "C:\Users\Pushti Sinojiya\.gemini\antigravity\scratch\the-coffee-space-react\public\images\brand_logo_transparent.png"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0)
$g.Dispose()
$img.Dispose()

# Sample top-left background color
$bg = $bmp.GetPixel(2, 2)
Write-Host "Sampling background color: R=$($bg.R), G=$($bg.G), B=$($bg.B)"

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        $diff = [Math]::Sqrt([Math]::Pow($p.R - $bg.R, 2) + [Math]::Pow($p.G - $bg.G, 2) + [Math]::Pow($p.B - $bg.B, 2))
        if ($diff -lt 45) {
            # Make background pixel 100% transparent
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Copy-Item $dstPath $srcPath -Force
Write-Host "Done! 100% Transparent PNG created successfully."
