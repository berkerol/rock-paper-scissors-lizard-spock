package rockPaperScissorsLizardSpock;

import java.util.Random;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class RockPaperScissorsLizardSpock {

    public static void main(String[] args) {
        int totalWon = 0, totalTie = 0, totalLost = 0, user, cmp;
        String title = "Setup", EOL = System.lineSeparator();
        ImageIcon[] rpsOptions = {new ImageIcon("images/rock.jpg"), new ImageIcon("images/paper.jpg"), new ImageIcon("images/scissors.jpg")},
                rpslsOptions = {new ImageIcon("images/rock.jpg"), new ImageIcon("images/paper.jpg"), new ImageIcon("images/scissors.jpg"),
                    new ImageIcon("images/lizard.jpg"), new ImageIcon("images/spock.jpg")}, options = null;
        Random random = new Random();
        switch (JOptionPane.showConfirmDialog(null, "Do you want the Lizard Spock expansion?", title, JOptionPane.YES_NO_OPTION)) {
            case 0:
                title = "RockPaperScissorsLizardSpock";
                options = rpslsOptions;
                break;
            case 1:
                title = "RockPaperScissors";
                options = rpsOptions;
                break;
            default:
                return;
        }
        while (true) {
            user = JOptionPane.showOptionDialog(null, "Choose your side!", title, JOptionPane.DEFAULT_OPTION,
                    JOptionPane.QUESTION_MESSAGE, null, options, options[options.length / 2]);
            if (user == -1) {
                break;
            }
            cmp = random.nextInt(options.length);
            String win = EOL + "Congratulations, you win!", lose = EOL + "You lose!", message = "";
            switch (cmp) {
                case 0:
                    message = "Computer chose Rock." + EOL;
                    break;
                case 1:
                    message = "Computer chose Paper." + EOL;
                    break;
                case 2:
                    message = "Computer chose Scissors." + EOL;
                    break;
                case 3:
                    message = "Computer chose Lizard." + EOL;
                    break;
                default:
                    message = "Computer chose Spock." + EOL;
            }
            if (user == 2 && cmp == 1) {
                JOptionPane.showMessageDialog(null, message + "Scissors cuts Paper." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 1 && cmp == 0) {
                JOptionPane.showMessageDialog(null, message + "Paper covers Rock." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 0 && cmp == 3) {
                JOptionPane.showMessageDialog(null, message + "Rock crushes Lizard." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 3 && cmp == 4) {
                JOptionPane.showMessageDialog(null, message + "Lizard poisons Spock." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 4 && cmp == 2) {
                JOptionPane.showMessageDialog(null, message + "Spock smashes Scissors." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 2 && cmp == 3) {
                JOptionPane.showMessageDialog(null, message + "Scissors decapitates Lizard." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 3 && cmp == 1) {
                JOptionPane.showMessageDialog(null, message + "Lizard eats Paper." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 1 && cmp == 4) {
                JOptionPane.showMessageDialog(null, message + "Paper disproves Spock." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 4 && cmp == 0) {
                JOptionPane.showMessageDialog(null, message + "Spock vaporizes Rock." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 0 && cmp == 2) {
                JOptionPane.showMessageDialog(null, message + "Rock crushes Scissors." + win, title, JOptionPane.INFORMATION_MESSAGE);
                totalWon++;
            }
            else if (user == 2 && cmp == 0) {
                JOptionPane.showMessageDialog(null, message + "Rock crushes Scissors." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 0 && cmp == 4) {
                JOptionPane.showMessageDialog(null, message + "Spock vaporizes Rock." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 4 && cmp == 1) {
                JOptionPane.showMessageDialog(null, message + "Paper disproves Spock." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 1 && cmp == 3) {
                JOptionPane.showMessageDialog(null, message + "Lizard eats Paper." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 3 && cmp == 2) {
                JOptionPane.showMessageDialog(null, message + "Scissors decapitates Lizard." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 2 && cmp == 4) {
                JOptionPane.showMessageDialog(null, message + "Spock smashes Scissors." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 4 && cmp == 3) {
                JOptionPane.showMessageDialog(null, message + "Lizard poisons Spock." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 3 && cmp == 0) {
                JOptionPane.showMessageDialog(null, message + "Rock crushes Lizard." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 0 && cmp == 1) {
                JOptionPane.showMessageDialog(null, message + "Paper covers Rock." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else if (user == 1 && cmp == 2) {
                JOptionPane.showMessageDialog(null, message + "Scissors cuts Paper." + lose, title, JOptionPane.ERROR_MESSAGE);
                totalLost++;
            }
            else {
                JOptionPane.showMessageDialog(null, message + "There is a tie.", title, JOptionPane.WARNING_MESSAGE);
                totalTie++;
            }
        }
        String message = "You played " + (totalWon + totalTie + totalLost) + " times.";
        if (totalWon != 0) {
            message += EOL + "You won " + totalWon + " times.";
        }
        if (totalTie != 0) {
            message += EOL + "There was a tie in " + totalTie + " times.";
        }
        if (totalLost != 0) {
            message += EOL + "You lost " + totalLost + " times.";
        }
        JOptionPane.showMessageDialog(null, message, title, JOptionPane.INFORMATION_MESSAGE);
    }
}