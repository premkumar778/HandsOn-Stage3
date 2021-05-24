package com.cts.junitlearn;

public class EvenorOdd {
	public boolean evenCheck(long n) {
		return (n % 2 == 0);
	}

	public boolean oddCheck(long n) {
		return (n % 2 != 0);
	}

	public int factorial(int n) {

		int k = 1;
		for (int i = 1; i <= n; i++) {
			k = k * i;
		}
		return k;
	}
}
