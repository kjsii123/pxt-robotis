/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer blockIdentity="sprites._createImageShim"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function img(lits: any, ...args: any[]): Image { return null }

// set palette before creating screen, so the JS version has the right BPP
image.setPalette(hex`__palette`)
//% whenUsed
const screen = _screen_internal.createScreen();

namespace image {
    //% shim=pxt::setPalette
    export function setPalette(buf: Buffer) { }
}

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Image): void { }
    //% shim=pxt::updateStats
    function updateStats(msg: string): void { }

    //% shim=pxt::updateScreenStatusBar
    function updateScreenStatusBar(img: Image): void { return }
    //% shim=pxt::setupScreenStatusBar
    function setupScreenStatusBar(barHeight: number): void { return }

    //% parts="screen"
    export function createScreen() {
        const img = image.create(160, 120)
        
        setupScreenStatusBar(8)

        const status = image.create(160, 8)
        updateScreenStatusBar(status) // clear the status area

        control.__screen.setupUpdate(() => updateScreen(img))
        control.EventContext.onStats = function (msg: string) {
            status.fill(0)
            status.print(msg, 2, 2, 1, image.font5)
            updateScreenStatusBar(status)
            updateStats(msg);
        }

        return img as ScreenImage;
    }
}
/**
 * ROBOTIS's devices
 */
//% block="robotiscategory1"
//% color=#4b6584 weight=89 icon="\uf1bb"
//% groups='["Screen", "Effects", "Tiles"]'
namespace robotiscategory1 {

    //% group="Screen"
    //% weight=24
    //% blockId=dxl_image_background block="set background image to %img=background_image_picker"
    export function robotisBackgroundimage(img: Image){
        
    }
}
