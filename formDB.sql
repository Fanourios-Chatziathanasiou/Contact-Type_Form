PGDMP     #                    y           formDB    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16720    formDB    DATABASE     l   CREATE DATABASE "formDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "formDB";
                postgres    false            ?            1259    16721    userdata    TABLE     ?  CREATE TABLE public.userdata (
    subject character varying,
    name character varying,
    surname character varying,
    sex character varying,
    phone character varying,
    postc character varying,
    addr character varying,
    city character varying,
    district character varying,
    country character varying,
    email character varying,
    message character varying
);
    DROP TABLE public.userdata;
       public         heap    postgres    false            ?          0    16721    userdata 
   TABLE DATA           |   COPY public.userdata (subject, name, surname, sex, phone, postc, addr, city, district, country, email, message) FROM stdin;
    public          postgres    false    200   Y       ?      x?????? ? ?     