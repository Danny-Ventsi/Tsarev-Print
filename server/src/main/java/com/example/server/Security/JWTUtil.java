package com.example.tsarevprintbackend.Security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Component
public class JWTUtil
{
    @Value("${jwt_secret}")
    private String secret;
    public String generateToken(String username, String role) throws IllegalArgumentException, JWTCreationException
    {
        Date dateToday = new Date();
        Instant expirationDate = dateToday.toInstant().plus(1, ChronoUnit.DAYS);
        return JWT.create()
                .withExpiresAt(expirationDate)
                .withSubject("User Details")
                .withClaim("role", role)
                .withClaim("username", username)
                .withIssuedAt(new Date())
                .withIssuer("Kaizen")
                .sign(Algorithm.HMAC256(secret));
    }

    public String validateTokenAndRetrieveSubject(String token)throws JWTVerificationException
    {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secret))
                .withSubject("User Details")
                .withIssuer("Kaizen")
                .build();

        DecodedJWT jwt = verifier.verify(token);
        return jwt.getClaim("username").asString();
    }

}

