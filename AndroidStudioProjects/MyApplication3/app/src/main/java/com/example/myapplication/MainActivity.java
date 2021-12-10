package com.example.myapplication;

import android.graphics.Point;
import android.os.Bundle;
import android.os.Handler;
import android.view.Display;
import android.view.WindowManager;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {
    private int screenWidth;
    private int screenHeight;
    private ImageView enemycar;
    private float enemycarX;
    private float enemycarY;

    private Handler handler = new Handler();
    private Timer timer = new Timer();

    public MainActivity() {
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        enemycar = findViewById(R.id.enemy_car);

        WindowManager wm = getWindowManager();
        Display disp = wm.getDefaultDisplay();
        Point size = new Point();
        disp.getSize(size);
        screenWidth = size.x;
        screenHeight = size.y;

        enemycar.setX(-80.0f);
        enemycar.setY(-80.0f);

        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                handler.post(new Runnable() {
                    @Override
                    public void run () {
                        changePos();
                    }

                });
            }
        } , 0 , 20);
    }

    public void changePos() {

        // Down
        enemycarY += 10;
        if (enemycar.getY() > screenHeight) {
            enemycarX = (float)Math.floor(Math.random() * (screenWidth - enemycar.getWidth()));
            enemycarY = -100.0f;
        }
        enemycar.setX(enemycarX);
        enemycar.setY(enemycarY);

    }

}
