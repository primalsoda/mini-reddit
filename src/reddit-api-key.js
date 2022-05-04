import React from "react";

const url = `https://www.reddit.com/api/v1/authorize`;

const client_id = '';
const response_type = 'code';
const random_string = Math.random().toString(36).replace(/[^a-z]+/g, '');
const redirect_uri = `https://mini-reddit-codecademy.netlify.app/`;
const duration = 'temporary';
const scope_string = '';
const endpoint = `?client_id=${client_id}&response_type=${response_type}&state=${random_string}&redirect_uri=${redirect_uri}&duration=${duration}&scope=${scope_string}`;

const full_url = `${url}${endpoint}`;