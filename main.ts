let selectedArea = 0
const areas = ["Area 1", "Area 2", "Area 3"]

// Create a selection menu that leads to 3 separate areas
function showSelectionMenu() {
    game.splash("Select an Area")
    
    let menuActive = true
    while (menuActive) {
        // Display menu with selection indicator
        scene.setBackgroundColor(1)
        screen.print("=" + " SELECT AREA " + "=", 5, 10)
        
        // Display areas with highlighting
        for (let i = 0; i < areas.length; i++) {
            let prefix = selectedArea === i ? "> " : "  "
            screen.print(prefix + areas[i], 20, 30 + i * 15)
        }
        
        // Handle input
        if (controller.up.isPressed()) {
            selectedArea = (selectedArea - 1 + areas.length) % areas.length
            pause(150)
        }
        if (controller.down.isPressed()) {
            selectedArea = (selectedArea + 1) % areas.length
            pause(150)
        }
        if (controller.A.isPressed()) {
            menuActive = false
            enterArea(selectedArea)
        }
    }
}

// Function to handle entering an area
function enterArea(area: number) {
    scene.setBackgroundColor(5)
    screen.clearScreen()
    
    switch(area) {
        case 0:
            area1()
            break
        case 1:
            area2()
            break
        case 2:
            area3()
            break
    }
}

// Area 1 - Example implementation
function area1() {
    game.splash("Welcome to Area 1!")
    screen.print("This is Area 1", 5, 20)
    screen.print("Press A to return", 5, 40)
    
    while (!controller.A.isPressed()) {
        pause(100)
    }
    showSelectionMenu()
}

// Area 2 - Example implementation
function area2() {
    game.splash("Welcome to Area 2!")
    screen.print("This is Area 2", 5, 20)
    screen.print("Press A to return", 5, 40)
    
    while (!controller.A.isPressed()) {
        pause(100)
    }
    showSelectionMenu()
}

// Area 3 - Example implementation
function area3() {
    game.splash("Welcome to Area 3!")
    screen.print("This is Area 3", 5, 20)
    screen.print("Press A to return", 5, 40)
    
    while (!controller.A.isPressed()) {
        pause(100)
    }
    showSelectionMenu()
}

// Start the game with the selection menu
showSelectionMenu()
