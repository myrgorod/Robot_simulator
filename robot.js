function my_robot_simulator(param_1) {

    let counter = 0;
    let x = 0;
    let y = 0;
    let dir = "north";

    for (let i = 0; i < param_1.length; i++) {
           
        if (param_1[i] == 'L') {
            counter--;
        }
        else if (param_1[i] == 'R') {
            counter++;
        }
        else if (param_1[i] == 'A', counter == 0 || counter == -4) {
            y--;
        }
        else if (param_1[i] == 'A', counter == 1 || counter == -3) {
            x++;
        }
        else if (param_1[i] == 'A', counter == 2 || counter == -2) {
            y++;
        }
        else if (param_1[i] == 'A', counter == 3 || counter == -1) {
            x--;
        }
                 
            if (counter == 0 || counter == -4) {
                dir = "north";
            }
            else if (counter == 1 || counter == -3 ) {
                dir = "east";
            }
            else if (counter == 2 || counter == -2) {
                dir = "south";
            }
            else if (counter == 3 || counter == -1) {
                dir = "west";
            }
            else if (counter > 4 || counter < -3) {
                dir = "Error. The value of the angle of rotation has been exceeded.";
            }
		}

    return `{x: ${x}, y: ${y}, bearing: '${dir}'}`
    }
    