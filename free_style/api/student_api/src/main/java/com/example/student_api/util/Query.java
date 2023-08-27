package com.example.thi.util;

public class Query {
    public static final String FIND_DU_AN_PAGE_AND_SEARCH = "SELECT * FROM thi.du_an JOIN doanh_nghiep ON du_an.doanh_nghiep_id = doanh_nghiep.doanh_nghiep_id WHERE du_an.thoi_gian_dang_ky LIKE :valueSearch \n" +
            "OR du_an.ten_du_an LIKE :valueSearch";
}
