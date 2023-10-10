public class Main {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        System.out.println("Shuffled Array: " + Arrays.toString(array));
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        int integerEquivalent = romanToInteger(romanNumeral);
        System.out.println("Integer equivalent: " + integerEquivalent);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
    private static void shuffleArray(int[] array) {
        Random random = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    private static int romanToInteger(String s) {
    }
    private static boolean isPangram(String s) {
        boolean[] alphabet = new boolean[26]; 
        int count = 0;
        
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a'; 
                if (!alphabet[index]) {
                    alphabet[index] = true;
                    count++;
                }
            }
        }

        return count == 26;
    }
}
