package com.example.thi.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class FormatDateTime {
    public static String formatDateTime(String dateTime) {
        LocalDateTime parsedDateTime = LocalDateTime.parse(dateTime, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        return parsedDateTime.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"));
    }
//    int number1 = 123;
//    int number2 = 4567;
//
//    String formattedNumber1 = String.format("%04d", number1);
//    String formattedNumber2 = String.format("%04d", number2);
//
//System.out.println(formattedNumber1); // In ra "0123"
//System.out.println(formattedNumber2); // In ra "4567"
}
