package com.codezlab.http_logger.internal.support;

import android.app.IntentService;
import android.content.Intent;

import androidx.annotation.Nullable;

import com.codezlab.http_logger.internal.data.ChuckContentProvider;

public class ClearTransactionsService extends IntentService {

    public ClearTransactionsService() {
        super("Chuck-ClearTransactionsService");
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        getContentResolver().delete(ChuckContentProvider.TRANSACTION_URI, null, null);
        NotificationHelper.clearBuffer();
        NotificationHelper notificationHelper = new NotificationHelper(this);
        notificationHelper.dismiss();
    }
}