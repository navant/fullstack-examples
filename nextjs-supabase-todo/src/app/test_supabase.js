"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { supabase } from "../../client";

export default function Home() {
  const handleTestConnection = () => {
    //console.log('handleTestConnection triggered');
    testSupabaseConnection();
  };
  async function testSupabaseConnection() {
    console.log('Testing Supabase Connection...');
    try {
      console.log('Testing Supabase Connection...');
      let { data, error, status } = await supabase
        .from('todo-example') // Replace with your actual table name
        .select('*')
        .limit(1);
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        console.log('Supabase connection is successful, data:', data);
      }
    } catch (error) {
      console.error('Supabase connection failed:', error.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div>
        <Head>
          <title>Supabase and NextJs Demo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold mt-20">
            <a className="text-blue-600" href="/">
              Full Stack Application With Tailwind CSS and Supabase in NextJs
            </a>
          </h1>
          <button
        onClick={handleTestConnection}
         //onClick={() => console.log('Button clicked')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        Test Supabase Connection
      </button>
        </main>
      </div>
    </div>
  );
}