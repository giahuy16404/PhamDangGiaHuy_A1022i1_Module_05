package com.example.blog.repository;


public class QueryDb {
    public static final String SELECT_BLOG_BY_ID = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category WHERE blog.id_Blog = ?";
    public static final String SELECT_MAX_ID_AUTHOR = "SELECT MAX(id_user) FROM user";
    public static final String SELECT_MAX_ID_STATUS_BLOG = "SELECT MAX(id_status_blog) FROM status_blog";

    public static final String SELECT_BLOG_ON_DAY = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category WHERE status_blog.time_create_blog = curdate()";

    public static final String SELECT_BLOG_TOP_VIEW = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category WHERE\n" +
            "status_blog.view_blog IN ( SELECT  MAX(status_blog.view_blog) FROM status_blog)";

    public static final String SELECT_ALL_BLOG = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category ";

    public static final String ADD_VIEW = "UPDATE status_blog SET status_blog.view_blog = status_blog.view_blog + 1 WHERE status_blog.id_status_blog = :id;";
    public static final String ADD_LIKE = "UPDATE status_blog SET status_blog.likeBlog = status_blog.likeBlog + 1 WHERE status_blog.id_status_blog = :id;";

    public static final String SELECT_BLOG_BY_CATEGORY = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category " +
            "            WHERE category.id_category LIKE :id";

    public static final String SELECT_BLOG_BY_SEARCH_ALL = "SELECT blog.id_Blog , blog.content , blog.title ,blog.description, user.id_user,\n" +
            "user.name , status_blog.id_status_blog , status_blog.like_blog , status_blog.time_create_blog,\n" +
            "status_blog.time_view_blog , status_blog.view_blog, category.id_category,category.name\n" +
            "FROM blog JOIN user ON blog.id_user = user.id_user\n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog\n" +
            "JOIN category ON blog.id_category = category.id_category " +
            "WHERE blog.title  LIKE :title OR blog.description LIKE :description OR author.name LIKE :name";

    public static final String FIND_ALL_BLOG = "SELECT * FROM blog JOIN user ON blog.id_user = user.id_user \n" +
            "JOIN status_blog ON blog.id_status_blog = status_blog.id_status_blog \n" +
            "JOIN category ON blog.id_category = category.id_category ORDER BY status_blog.time_create_blog DESC";

}
