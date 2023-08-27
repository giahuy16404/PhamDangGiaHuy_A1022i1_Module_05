package com.example.thi.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class FormatDate {
    public static String formatDate(String date){
        LocalDate parsedDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        return parsedDate.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
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
