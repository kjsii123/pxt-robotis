//% color=#0078D7 weight=1000 icon="\uf02e" block="Basic"
namespace basic {
    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_printNum2 block="#print %num"
    //% weight=1 blockGap=8
    export function printNum2(num: number): void {
        // printCM300();
    }

    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_printIcon2 block="#print %img (icon UI)"
    //% weight=1 blockGap=8
    export function printIcon2(img: number): void {
        
    }

    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_printDrawing block="#print %img (drawing UI)"
    //% weight=1 blockGap=8
    export function printDrawing(img: number): void {
        
    }

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body code to execute
     */
    //% help=loops/forever weight=1 afterOnStart=true
    //% blockId=cm300_forever2 block="#forever" blockAllowMultiple=1
    //% weight=1 blockGap=8
    export function forever2(a: () => void): void {
        loops.forever(a);
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=loops/pause weight=1
    //% async block="#pause %pause=timePicker|ms"
    //% blockId=cm300_pause2
    //% weight=1 blockGap=8
    export function pause2(ms: number) {
        loops.pause(ms);
    }

    /**
     * Clear LCD Screen
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_clearScreen block="#clear screen"
    //% weight=1 blockGap=8
    export function clearScreen() {
        
    }
} // namespace basic

enum CM300_Sensor_IR_Light {
    //% block="IR 1"
    IR1,
    //% block="IR 2"
    IR2,
    //% block="IR 3"
    IR3,
    //% block="IR 4"
    IR4,
    Light
}

enum CM300_SoundCount {
    //% block="Sound Detecting Count"
    SoundDetectingCount,
    //% block="Sound Detected Count"    
    SoundDetectedCount
}

enum CM300_Joystick_XY {
    //% block="Joystick X"
    JoystickX,
    //% block="Joystick Y"
    JoystickY
}

enum CM300_Joystick_Button {
    //% block="Joystick Up"
    JoystickUp,
    //% block="Joystick Down"
    JoystickDown,
    //% block="Joystick Left"
    JoystickLeft,
    //% block="Joystick Right"
    JoystickRight
}

enum CM300_Gesture {
    /**
     * Raised when shaken
     */
    //% block=shake
    Shake = 11,  // ACCELEROMETER_EVT_SHAKE
    /**
     * Raised when the device tilts up
     */
    //% block="tilt up"
    TiltUp = 1,  // ACCELEROMETER_EVT_TILT_UP
    /**
     * Raised when the device tilts down
     */
    //% block="tilt down"
    TiltDown = 2,  // ACCELEROMETER_EVT_TILT_DOWN
    /**
     * Raised when the screen is pointing left
     */
    //% block="tilt left"
    TiltLeft = 3,  // ACCELEROMETER_EVT_TILT_LEFT
    /**
     * Raised when the screen is pointing right
     */
    //% block="tilt right"
    TiltRight = 4,  // ACCELEROMETER_EVT_TILT_RIGHT
    /**
     * Raised when the screen faces up
     */
    //% block="face up"
    FaceUp = 5,  // ACCELEROMETER_EVT_FACE_UP
    /**
     * Raised when the screen is pointing up and the board is horizontal
     */
    //% block="face down"
    FaceDown = 6,  // ACCELEROMETER_EVT_FACE_DOWN
    /**
     * Raised when the board is falling!
     */
    //% block="free fall"
    FreeFall = 7,  // ACCELEROMETER_EVT_FREEFALL
    /**
     * Raised when a 2G shock is detected
     */
    //% block="2g (step)"
    TwoG = 12,  // ACCELEROMETER_EVT_2G
    /**
     * Raised when a 3G shock is detected
     */
    //% block="3g"
    ThreeG = 8,  // ACCELEROMETER_EVT_3G
    /**
     * Raised when a 6G shock is detected
     */
    //% block="6g"
    SixG = 9,  // ACCELEROMETER_EVT_6G
    /**
     * Raised when a 8G shock is detected
     */
    //% block="8g"
    EightG = 10,  // ACCELEROMETER_EVT_8G
}


//% color=#B4009E weight=900 icon="\uf192" block="Input"
namespace input {
    /**
     * Read sensor (IR, Light)
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readSensorIrLight block="#%sensor value"
    //% weight=1 blockGap=8
    export function readSensorIrLight(sensor: CM300_Sensor_IR_Light): number {
        return 0;
    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readSoundCount block="#%sound value"
    //% weight=1 blockGap=8
    export function readSoundCount(sound: CM300_SoundCount): number {
        return 0;
    }

    /**
     * Read joystick
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readJoystick block="#%joystick value"
    //% weight=1 blockGap=8
    export function readJoystick(joystick: CM300_Joystick_XY): number {
        return 0;
    }

    /**
     * Read Working time
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readWorkingTime block="#working time"
    //% weight=1 blockGap=8
    export function readWorkingTime(): number {
        return 0;
    }

    /**
     * Check if a button is pressed or not.
     * @param button the button to query the request
     */
    //% help=input/button/is-pressed
    //% blockId=cm300_isJoysticPressed block="#joystick %joystick| is pressed"
    //% weight=50 blockGap=8
    //% trackArgs=0
    export function isJoysticPressed(joystick: CM300_Joystick_Button): boolean {
        // return button->isPressed();
        return true;
    }

    /**
     * Check if a button is pressed or not.
     * @param button the button to query the request
     */
    //% help=input/button/is-pressed
    //% blockId=cm300_isController block="#controller is %controller"
    //% weight=50 blockGap=8
    //% trackArgs=0
    export function isController(controller: CM300_Gesture): boolean {
        // return button->isPressed();
        return true;
    }
} // namespace ButtonMethods

//% color=#E30FC0 weight=900 icon="\uf025" block="Music"
namespace music {
    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_recordSound block="#record sound for %sec second(s)"
    //% weight=1 blockGap=8
    //% sec.defl=5 sec.min=1 sec.max=10
    export function recordSound(sec: number): void {
        
    }

    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_playRecordedSound block="#play recorded sound for %sec second(s)"
    //% weight=1 blockGap=8
    //% sec.defl=5 sec.min=1 sec.max=10
    export function playRecordedSound(sec: number): void {
        
    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readSoundDetectedCount block="#sound detected count value"
    //% weight=1 blockGap=8
    export function readSoundDetectedCount(): number {
        return 0;
    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_readSoundDetectingCount block="#sound detecting count value"
    //% weight=1 blockGap=8
    export function readSoundDetectingCount(): number {
        return 0;
    }
} // namespace ButtonMethods

enum CM300_Screen_Color {
    Gray,
    Color
}

enum CM300_Motor_ID {
    //% block="Motor ID 1"
    ID_1,
    //% block="Motor ID 2"
    ID_2,
    //% block="Motor ID ALL"
    ID_ALL
}

enum CM300_Motor_Mode {
    //% block="Wheel Mode"
    Wheel,
    //% block="Joint Mode"
    Joint
}

enum CM300_Direction {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward,
    //% block="Turn left"
    TurnLeft,
    //% block="Turn right"
    TurnRight,
    //% block="Stop"
    Stop
}

enum CM300_Clock_Direction {
    //% block="Clockwise"
    Clockwise,
    //% block="Counterclockwise"
    Counterclockwise
}

//% color=#A80000 weight=900 icon="\uf140" block="Output"
namespace output {
    /**
     * Print text on LCD
     * @param text text to print
     */
    //% help=basic/print/print
    //% blockId=cm300_setScreenBrightness block="#set screen brightness to %bright"
    //% weight=1 blockGap=8
    //% bright.defl=50 bright.min=1 bright.max=100
    export function setScreenBrightness(bright: number): void {
        
    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setScreenColor block="#set screen mode to %color"
    //% weight=1 blockGap=8
    export function setScreenColor(color: CM300_Screen_Color): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setMotorMode block="#set %motor to %mode"
    //% weight=1 blockGap=8
    export function setMotorMode(motor: CM300_Motor_ID, mode: CM300_Motor_Mode): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setJointModeSpeed block="#set speed of joint mode to %speed ％"
    //% weight=1 blockGap=8
    //% speed.defl=50 speed.min=0 speed.max=100
    export function setJointModeSpeed(speed: number): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setSpeedDirection block="#set speed to %speed ％, direction to %direction"
    //% weight=1 blockGap=8
    //% speed.defl=50 speed.min=0 speed.max=100
    export function setSpeedDirection(speed: number, direction: CM300_Direction): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setModtorIdSpeedDirection block="#motor ID %motorId , speed to %speed ％, direction to %direction"
    //% weight=1 blockGap=8
    //% speed.defl=50 speed.min=0 speed.max=100
    //% motorId.defl=1 motorId.min=1 motorId.max=2
    export function setModtorIdSpeedDirection(motorId: number, speed: number, direction: CM300_Clock_Direction): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setModtorIdPosition block="#motor ID %motorId , position to %position"
    //% weight=1 blockGap=8
    //% position.defl=512 position.min=0 position.max=1024
    //% motorId.defl=1 motorId.min=1 motorId.max=2
    export function setModtorIdPosition(motorId: number, position: number): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_setModtorIdPosition2 block="#position to %position=protractorPicker"
    //% weight=1 blockGap=8
    //% position.defl=512 position.min=0 position.max=1024
    export function setModtorIdPosition2(position: number): void {

    }
} // namespace ButtonMethods

//% color=#E3008C weight=900 icon="\uf086" block="Communication"
namespace communication {
    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_sendMessage block="#send message %message"
    //% weight=1 blockGap=8
    export function sendMessage(message: string): void {

    }

    /**
     * Read sound count
     */
    //% help=basic/clear-screen weight=1
    //% blockId=cm300_onMessageReceived block="#on message received %message"
    //% weight=1 blockGap=8
    export function onMessageReceived(message: string, handler: () => void): void {

    }

    
} // namespace ButtonMethods

//% color=#40BF4A weight=900 icon="\uf205" block="Loops"
namespace loops {
    // will not change.
} // namespace ButtonMethods

//% color=#4CBFE6 weight=900 icon="\uf205"  block="Logic"
namespace logic {
    // will not change.
} // namespace ButtonMethods