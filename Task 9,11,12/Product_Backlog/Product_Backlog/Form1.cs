﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.Sql;
using System.Data.SqlClient;

namespace Product_Backlog
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(@"Data Source=CHAITANYA;Initial Catalog=Booking;Integrated Security=True");
            try
            {
                con.Open();
                 SqlCommand cmd = new SqlCommand("Insert into TicketBooking( PRN_No,Travel_Date,Source_Airport,Destination_Airport,Status,Seat_Preference,Meal_Preference) values('" + textBox1.Text + "','" + textBox2.Text + "','" + textBox3.Text + "','" + textBox4.Text + "','" + textBox5.Text + "', '" + textBox6.Text + "','" + textBox7.Text + "')", con);
                cmd.ExecuteNonQuery();
                MessageBox.Show("Data has been Saved");  
                textBox1.Clear();
                textBox2.Clear();
                textBox3.Clear();
                textBox4.Clear();
                textBox5.Clear();
                textBox6.Clear();
                textBox7.Clear();
                

                con.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }

        }
    }
}
