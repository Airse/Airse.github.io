import java.util.*;
import java.io.FileReader;
import java.io.BufferedReader;

public class NameChecker {
  public ArrayList<String> badWords;

  public static void main(String[] args) {
    NameChecker nc = new NameChecker();
    System.out.println(nc.isValidName("Erin Teo")); // true
    System.out.println(nc.isValidName("Damn It")); // false
  }

  public NameChecker() {
    badWords = new ArrayList<String>();

    try {
      FileReader fr = new FileReader("badwords.txt");
      BufferedReader br = new BufferedReader(fr);
      String line;
      while ((line = br.readLine()) != null) {
        badWords.add(line);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public boolean isValidName(String name) {
    String[] split = name.split(" ");
    for (String s : split) {
      for (String badWord : this.badWords) {
        if (s.equals(badWord)) {
          return false;
        }
      }
    }
    return true;
  }
}