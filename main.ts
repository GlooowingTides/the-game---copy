// ===== VARIABLES =====
let player: Sprite
let npc: Sprite
let inMenu = false
let selectedArea = 0
let talkingToNpc = false

// ===== SETUP (runs once at start) =====
game.onUpdate(function () {
    // Move player with arrow keys
    if (controller.left.isPressed()) {
        player.x -= 2
    }
    if (controller.right.isPressed()) {
        player.x += 2
    }
    if (controller.up.isPressed()) {
        player.y -= 2
    }
    if (controller.down.isPressed()) {
        player.y += 2
    }

    // Check if player is touching NPC
    if (sprites.overlaps(player, npc)) {
        if (controller.A.isPressed()) {
            talkingToNpc = true
            inMenu = true
            selectedArea = 0
            showMenu()
        }
    }
})

// ===== CREATE GAME WORLD =====
function createWorld() {
    // Set background color (blue)
    scene.setBackgroundColor(1)

    // Create player (blue square)
    player = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    player.setPosition(75, 80)

    // Create NPC (cyan square)
    npc = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . 8 8 8 8 8 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.NPC)
    npc.setPosition(75, 30)
}

// ===== MENU SYSTEM =====
function showMenu() {
    let menuOpen = true
    
    while (menuOpen) {
        // Clear screen and draw menu
        screen.clearScreen()
        scene.setBackgroundColor(1)
        
        // Title
        screen.print("== SELECT AREA ==", 20, 10)
        
        // Display all 3 areas
        screen.print("Area 1: Forest", 20, 30)
        screen.print("Area 2: Castle", 20, 45)
        screen.print("Area 3: Cave", 20, 60)
        
        // Show selector arrow
        if (selectedArea == 0) {
            screen.print(">", 10, 30)
        } else if (selectedArea == 1) {
            screen.print(">", 10, 45)
        } else if (selectedArea == 2) {
            screen.print(">", 10, 60)
        }
        
        // Show controls
        screen.print("UP/DOWN to select", 20, 80)
        screen.print("A to enter, B to exit", 20, 95)
        
        // Handle input
        if (controller.up.isPressed()) {
            selectedArea = selectedArea - 1
            if (selectedArea < 0) {
                selectedArea = 2
            }
            pause(150)
        }
        
        if (controller.down.isPressed()) {
            selectedArea = selectedArea + 1
            if (selectedArea > 2) {
                selectedArea = 0
            }
            pause(150)
        }
        
        if (controller.A.isPressed()) {
            // Enter selected area
            menuOpen = false
            if (selectedArea == 0) {
                goToForest()
            } else if (selectedArea == 1) {
                goToCastle()
            } else if (selectedArea == 2) {
                goToCave()
            }
        }
        
        if (controller.B.isPressed()) {
            // Close menu
            menuOpen = false
            inMenu = false
            talkingToNpc = false
        }
        
        pause(100)
    }
}

// ===== AREA 1: FOREST =====
function goToForest() {
    scene.setBackgroundColor(5)  // Green background
    screen.clearScreen()
    
    let inArea = true
    while (inArea) {
        screen.clearScreen()
        screen.print("FOREST", 30, 20)
        screen.print("A peaceful forest", 20, 40)
        screen.print("Press A to return", 20, 80)
        
        if (controller.A.isPressed()) {
            inArea = false
            showMenu()
        }
        
        pause(100)
    }
}

// ===== AREA 2: CASTLE =====
function goToCastle() {
    scene.setBackgroundColor(11)  // Purple background
    screen.clearScreen()
    
    let inArea = true
    while (inArea) {
        screen.clearScreen()
        screen.print("CASTLE", 30, 20)
        screen.print("A grand castle", 20, 40)
        screen.print("Press A to return", 20, 80)
        
        if (controller.A.isPressed()) {
            inArea = false
            showMenu()
        }
        
        pause(100)
    }
}

// ===== AREA 3: CAVE =====
function goToCave() {
    scene.setBackgroundColor(15)  // Dark gray background
    screen.clearScreen()
    
    let inArea = true
    while (inArea) {
        screen.clearScreen()
        screen.print("CAVE", 30, 20)
        screen.print("A dark cave", 20, 40)
        screen.print("Press A to return", 20, 80)
        
        if (controller.A.isPressed()) {
            inArea = false
            showMenu()
        }
        
        pause(100)
    }
}

// ===== START GAME =====
createWorld()
