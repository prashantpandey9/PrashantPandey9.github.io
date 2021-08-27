---
title: API
date: "2020-07-03"
description: "Technically, API stands for Application Programmi....."
path: '/blog/api/API'
---

Technically, API stands for Application Programming Interface. An application programming interface is a computing interface that defines interactions between multiple software intermediaries or it is the interface that allows software applications to communicate with each other. API is totally like a broker that takes requests and responses from both sides and make communication between two parties. Let’s walk through an example. Imagine that an API is a waiter at your favorite restaurant. You are sitting at the table looking at the menu deciding what to order. The kitchen, also known as the provider, will fulfill your order. But how will the kitchen know what you want and how will you get your food from the kitchen? Enter your waiter, also known as the API! The waiter takes your order (the request), delivers it to the kitchen, and then delivers the food (the response) back to you.

## Types of APIs

### Web APIs
Web APIs are APIs that can be accessed using the HTTP protocol. The API defines endpoints, and valid request and response formats. Web APIs include the APIs used to communicate with the browser.They may be services such as web notifications and web storage. Different web APIs feature varying levels of security and privacy, including open, internal and partner APIs. Multiple web APIs can be combined into a composite API - a collection of data or service APIs.

### Open APIs

Open APIs, also known as external or public APIs, are available to developers and other users with minimal restrictions. They may require registration, and use of an API key, or maybe completely open. They are intended for external users (developers at other companies, for example) to access data or services

### Internal APIs
In contrast to open APIs, internal APIs are designed to be hidden from external users. They are used within a company to share resources. They allow different teams or sections of a business to consume each other’s tools, data and programs. Using internal APIs has several advantages over conventional integration techniques, including security and access control, an audit trail of system access, and a standard interface for connecting multiple services.

### Partner APIs
Partner APIs are technically similar to open APIs, but they feature restricted access, often controlled through a third-party API gateway. They are usually intended for a specific purpose, such as providing access to a paid-for service. This is a very common pattern in software as a service ecosystem.

### Composite APIs
Composite APIs allow developers to access several endpoints in one call. These could be different endpoints of a single API, or they could be multiple services or data sources. Composite APIs are especially useful in microservice architectures, where a user may need information from several services to perform a single task. Using composite APIs can reduce server load and improve application performance, as one call can return all the data a user needs.

## API Architectures and Protocols:

REST: REST (representational state transfer) is a very popular web API architecture. To be a REST API, an API must adopt  certain architectural constraints, or principles, including :

* Client-server architecture: the interface is separated from the backend and data storage. This allows for flexibility, and for different components to evolve independent of each other.

* Statelessness: no client context is stored on the server between requests.
* Cacheability: clients can cache responses, so a REST API response must explicitly state whether it can be cached or not.
* Layered system: the API will work whether it is communicating directly with a server, or through an intermediary such as a load balancer.

## JSON-RPC and XML-RPC

An RPC is a remote procedural call protocol. XML-RPC uses XML to encode its calls, while JSON-RPC uses JSON for the encoding. Both protocols are simple. A call can contain multiple parameters, and expects one result. They have a couple of key features, which require a different architecture to REST:

* They are designed to call methods, whereas REST protocols involve the transfer of documents (resource representations). Or, to put it another way, REST works with resources, whereas RPC is about actions.

* The URI identifies the server, but contains no information in its parameters, whereas in REST the URI contains details such as query parameters.

## SOAP

SOAP (simple object access protocol) is an established web API protocol. It is intended to be extensible, neutral (able to operate over a range of communication protocols, including HTTP, SMTP, TCP and more), and independent (it allows for any programming style) The SOAP specification includes:

* The processing model: how to process a SOAP message.
* Extensibility model: SOAP features and modules.
* Protocol binding rules: how to use SOAP with an underlying protocol, such as HTTP.
* Message construct: how to structure a SOAP message.

So this is all about the basics of an API, I hope you understand now what is API? In the next article, we will talk about the HTTP Methods for RESTful APIs.